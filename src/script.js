//input mask bundle ip address
var ipv4_address = $('#ipv4');
ipv4_address.inputmask({
    alias: "ip",
    greedy: false //The initial mask shown will be "" instead of "-____".
});