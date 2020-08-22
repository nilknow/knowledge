import { ctx } from '../canvas.js'

export function rect(startX, startY, width, height) {
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.moveTo(startX + width, startY)
    ctx.moveTo(startX + width, startY + height)
    ctx.fill()
    ctx.fillStyle='black'
}