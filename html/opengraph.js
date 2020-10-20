let tags = require('./tags');

function OpenGraph(title,
                   description,
                   url,
                   image
                  ) {

  this.title = title;
  this.url = url;
  this.image = image;
  this.description = description;

  function ogtag(name, value) {
    return tags.meta({ 
      property: `og:${name}`,
      content: value });
  }
  let og = {
    frags: [
      ogtag("title", title),
      ogtag("description", description),
      ogtag("url", url),
      ogtag("type", "website"),
      ogtag("site_name", "chessishard.com"),
    ].join('')
  };
  if (image) {
    og.frags += ogtag("image", image);
  }

  function twtag(name, value) {
    return tags.meta({ 
      property: `twitter:${name}`,
      content: value });
  }
  let twitter = {
    frags: [
      twtag("card", "summary"),
      twtag("title", title),
      twtag("description", description)
    ].join('')
  };
  if (image) {
    twitter.frags += twtag("image", image);
  }

  this.frags = og.frags + twitter.frags;
};

module.exports = function openGraph({title,
                                     description,
                                     url,
                                     image}) {
  return new OpenGraph(title,
                       description,
                       url,
                       image);
};
