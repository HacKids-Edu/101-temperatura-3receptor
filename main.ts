radio.onReceivedNumber(function (receivedNumber) {
    led.plot(0, 0)
    serial.writeValue("Celsius", receivedNumber)
})
basic.showString("Receptor")
radio.setGroup(20)
basic.forever(function () {
	
})
