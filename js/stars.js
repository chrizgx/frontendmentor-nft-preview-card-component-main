const canvas = document.getElementById('canvas');
const starback = new Starback(canvas, {
    type: 'dot',
    quantity: 100,
    direction: 225,
    backgroundColor: ['#00000000', '#00000000'],
    randomOpacity: true,
    starSize: [0, 1]
});