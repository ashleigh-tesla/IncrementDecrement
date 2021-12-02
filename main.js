const incBtn = document.getElementsByClassName('inc')
const decBtn = document.getElementsByClassName('dec')
const qty = document.getElementsByClassName('qty')[0]

const qtyTotal = []

const qtyObject = {
    quantity: 1,
    name: 'for Cart Quantity'
}

for (var i = 0; i < incBtn.length; i++) {
    let incBtns = incBtn[i]
    incBtns.addEventListener('click', () => {
        console.log('btn worked')
        localItem(qtyObject)
    })
}

function localItem(qtyObject) {
    let cartQuantity = JSON.parse(localStorage.getItem('Qty'))
    if (cartQuantity === null) {
        qtyTotal.push(qtyObject)
        localStorage.setItem('Qty', JSON.stringify(qtyTotal))
    } else {
        cartQuantity.map(item => {
            if (qtyObject.name === item.name) {
                qtyObject.quantity = item.quantity += 1
                if (item.quantity > 10) {
                    qtyObject.quantity = item.quantity = 10
                    alert("That's The Maximal Quantity")
                }
            } else {
                qtyTotal.push(item)
            }
        })
        qtyTotal.push(qtyObject)
    }
    localStorage.setItem('Qty', JSON.stringify(qtyTotal))
    window.location.reload()
}







for (var i = 0; i < decBtn.length; i++) {
    let decBtns = decBtn[i]
    decBtns.addEventListener('click', () => {
        console.log('btn worked')
        minusBtn(qtyObject)
    })
}

function minusBtn(qtyObject) {
    let cartQuantity = JSON.parse(localStorage.getItem('Qty'))
    if (cartQuantity === null) {
        qtyTotal.push(qtyObject)
        localStorage.setItem('Qty', JSON.stringify(qtyTotal))
    } else {
        cartQuantity.map(item => {
            if (qtyObject.name === item.name) {
                qtyObject.quantity = item.quantity -= 1
                if (item.quantity <= 0) {
                    qtyObject.quantity = item.quantity = 1
                    alert("That's The Minimal Quantity")
                }
            } else {
                qtyTotal.push(item)
            }
        })
        qtyTotal.push(qtyObject)
    }
    localStorage.setItem('Qty', JSON.stringify(qtyTotal))
    window.location.reload()
}

function quantShow() {
    let cartQuant = 0
    let cartQuantity = JSON.parse(localStorage.getItem('Qty'))
    cartQuantity.map(item => {
        cartQuant = item.quantity + cartQuant
    })
    qty.value = cartQuant
    console.log(qty.value)
}
quantShow()