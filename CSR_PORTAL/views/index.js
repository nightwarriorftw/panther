window.onload = function () {
    console.log("In Function")
    
    var total=0;
    var refreshIntervalId = setInterval ( function () {
        updateCounter()
        total++;
        console.log("In setInterval")
    }
    , 0)
    
    if(total === 7634) {
        clearInterval(refreshIntervalId);
    }
}

var c1=0, c2=0, c3=0, c4=0

var updateCounter = function () {
    // ----COMPANIES
    if(c1!==1678) {
        c1++;
        document.getElementById("companies").innerHTML = c1.toString() + `<span>Total No. of      <br> Companies      </span>`;
    }
    
    
    // -------AMOUNT
    if(c2!==7634) {
        c2++;
        document.getElementById("amount").innerHTML = c2.toString() + `<span> Total Amount Spent<br> on CSR (INR Cr.)</span>`;
    }
    
    
    // --------PROJECTS
    if(c3!==2789) {
        c3++;
        document.getElementById("projects").innerHTML = c3.toString() + `<span>Total No. of<br> CSR Projects</span>`;
    }
    
    
    // --------SECTORS
    if(c4!==29) {
        c4++;
        document.getElementById("sectors").innerHTML = c4.toString() + `<span>Development Sectors<br> Entered by Companies</span>`;
    }
}
