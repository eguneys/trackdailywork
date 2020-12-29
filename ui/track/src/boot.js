export default function (opts) {

  let track;

  let $_ = document.getElementById('app');

  opts.$_ = $_;
  track = window['TDWTrack'].app(opts);
}
