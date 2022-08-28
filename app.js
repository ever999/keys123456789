btn = document.querySelectorAll('button')
    nums = document.querySelector('.numbers')

    Array.prototype.forEach.call(btn, function (toggleExtra, index) {
        toggleExtra.addEventListener('click', function () {
        
        console.log(index+1);

        var node = document.createTextNode(index+1);
        nums.appendChild(node);

        console.log(nums.textContent.length)
        if(nums.textContent.length > 4){
            nums.textContent = ''
        }
    })
    });

let grid = document.querySelector('.grid')

let sliderY = document.getElementById("myRange")
let sliderH = document.getElementById("myRangeH")

let sliderW = document.getElementById("myRangeW")
let sliderHeight = document.getElementById("myRangeHgh")

/* .style.marginTop */

sliderY.addEventListener('click', add = () => {
    console.log(sliderY.value)
    grid.style.marginTop = sliderY.value + 'px'
    
})

sliderH.addEventListener('click', add = () => {
    console.log(myRangeH.value)
    grid.style.marginLeft = myRangeH.value + 'px'
    
})

sliderW.addEventListener('click', add = () => {
    console.log(sliderW.value)
    grid.style.width = sliderW.value + 'px'
    
})


sliderHeight.addEventListener('click', add = () => {
    console.log(sliderHeight.value)
    grid.style.height = sliderHeight.value + 'px'
    
})


