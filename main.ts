radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (receivedNumber == 1) {
            TourneDroite(90)
        } else {
            if (receivedNumber == 2) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            } else {
                if (receivedNumber == 3) {
                    TourneGauche(90)
                    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
                } else {
                    if (receivedNumber == 4) {
                        Stop()
                    }
                }
            }
        }
    }
})
function TourneGauche (Degres: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.East)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 64)
    basic.pause(780 * (Degres / 90))
    maqueen.motorStop(maqueen.Motors.M2)
}
function TourneDroite (Degres: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.West)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 64)
    basic.pause(780 * (Degres / 90))
    maqueen.motorStop(maqueen.Motors.M1)
}
function EnArriere (Duree: number, Vitesse: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.South)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Vitesse)
    basic.pause(Duree)
}
function EnAvant (Duree: number, Vitesse: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.North)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Vitesse)
    basic.pause(Duree)
}
function Stop () {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.showIcon(IconNames.StickFigure)
radio.setGroup(1)
