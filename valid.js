let validation = {};

validation.fToValid = function(_invalid) {
  return value => validation
    .toValid(value, _invalid);
};

validation.toValid = function (value, _invalid) {
  return value ? validation.valid(value) :
    validation.invalid(_invalid);
};

validation.valid = function(value) {
  return new Validation(null, value);
};

validation.invalid = function(invalid) {
  return new Validation(invalid);
};

validation.group = function(fOs, _) {
  let res = validation.valid({});

  fOs.forEach(fO => {
    let res2;
    if ((res2 = fO(_))) {
      res = res.flatMap(acc => 
        res2.map(b => {
          for (let key in b) {
            acc[key] = b[key];
          }
          return acc;
        })
      );
    }
  });

  return res;
};

validation.fOptional = function(property, fCheck) {
  return _ => {
    if (_[property]) {
      return fCheck(_[property])
        .map(_ => ({ [property]: _ }));
    } else return null;
  };
};

function Validation(invalid, valid) {
  this.invalid = invalid;
  this.valid = valid;

  const makeInvalid = (_invalid) => {
    valid = null;
    invalid = _invalid;

    this.invalid = invalid;
    this.valid = valid;
  };

  const makeValid = (_valid) => {
    valid = _valid;
    invalid = null;

    this.valid = valid;
    this.invalid = invalid;
  };

  this.flatMap = (fvalid, finvalid = _ => validation.invalid(_)) => {
    return this.valid ? fvalid(this.valid) : 
      finvalid(this.invalid);
  };

  this.fold = (fvalid, finvalid = _ => _) => {
    return this.valid ? fvalid(this.valid) : 
      finvalid(this.invalid);
  };

  this.map = (fvalid) => {
    if (this.valid) {
      makeValid(fvalid(valid));
    }
    return this;
  };

  this.check = (ftest, _invalid) => {
    if (this.valid && ftest(this.valid)) {
      makeInvalid(_invalid);
    }
    return this;
  };

  this.checkOr = (ftest1, ftest2, _invalid) => {
    if (this.valid && !(ftest1(this.valid)
                        || ftest2(this.valid))) {
      makeInvalid(_invalid);
    }
    return this;
  };

  this.getOrElse = (_) => {
    return this.valid ? this.valid : _();
  };
}

module.exports = validation;
