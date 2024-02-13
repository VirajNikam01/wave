
const gui = new dat.GUI()
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01
}


const waveFolder = gui.addFolder('wave')
waveFolder.add(wave, 'y', 0, canvas.height)
waveFolder.add(wave, 'length', -0.01, 0.01)
waveFolder.add(wave, 'amplitude', -300, 300)
waveFolder.add(wave, 'frequency', -0.01, 1)
waveFolder.open()


let increment = wave.frequency
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle= "rgba(0,0,0,0.01)"
    c.fillRect(0,0,canvas.width, canvas.height)

  c.beginPath()
  c.moveTo(0, canvas.height / 2)
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude)
  }

  c.strokeStyle = `hsl(${Math.random()*360} 50% 50%)`
  c.stroke()

  increment += wave.frequency
}

animate()
