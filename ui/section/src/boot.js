export default function(opts) {
  const $_ = document.getElementById("md"),
        { data } = opts;
  let section;

  opts.$_ = $_;
  section = window['ChessIsSection'].app(opts);

}
