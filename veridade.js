function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO}')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    } if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'noite.jpg')
        } else if (idade >= 10 && idade <= 18) {
            //Adolescente
            img.setAttribute('src', 'ado-m.jpg')
        } else if (idade > 20 && idade < 50){
            //Adulto
            img.setAttribute('src', 'adul-m.jpg')
        } else if (idade > 50  ) {
            //Coroa
            img.setAttribute('src', 'coroa-m.jpg')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'bb-f.jpg')
        } else if (idade >= 10 && idade <= 18) {
            //Adolescente
            img.setAttribute('src', 'ado-f.jpg')
        } else if (idade > 20 && idade < 50) {
            //Adulto
            img.setAttribute('src', 'adul-f.webp')
        } else if (idade >= 50 ) {
            //Coroa
            img.setAttribute('src', 'coroa-m.JPEG')
        }
    }
    res.style.texAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}
