function contactPage(){
    document.getElementById('main').className = 'contact';
    document.getElementById('header').className = 'contact';
    document.getElementById('footer').className = 'contact';
    document.getElementById('formain').className = 'contact'
}

function homePage(){
    document.getElementById('main').className = '';
    document.getElementById('header').className = '';
    document.getElementById('footer').className = '';
    document.getElementById('formain').className = ''
}

function formValidate(){
    var val = true;

    var nreg = /^[a-zא-תA-Z]+$/;
    var treg = /[0][5]\d{1}[-]{0,1}[0-9]{7}$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(document.getElementById('fname').value==''){
        document.getElementById('fn').className += ' invalid';
        document.getElementById('fnspan').textContent = "שדה חובה";
        val = false;
    }
    else if(!(document.getElementById('fname').value.match(nreg))){
        document.getElementById('fnspan').textContent = "קלט לא מתאים";
        document.getElementById('fn').className += ' invalid';
        val = false;
    }
    else{
        document.getElementById('fn').className = 'row';
    }

    if(document.getElementById('lname').value==''){
        document.getElementById('ln').className += ' invalid';
        document.getElementById('lnspan').textContent = "שדה חובה";
        val = false;
    }
    else if(!document.getElementById('lname').value.match(nreg)){
        document.getElementById('ln').className += ' invalid';
        document.getElementById('lnspan').textContent = "קלט לא מתאים";
        val = false;
    }
    else{
        document.getElementById('ln').className = 'row';
    }


    if(document.getElementById('tel').value==''){
        document.getElementById('phone').className += ' invalid';
        document.getElementById('telspan').textContent = "שדה חובה";
        val = false;
    }
    else if(!document.getElementById('tel').value.match(treg)){
        document.getElementById('phone').className += ' invalid';
        document.getElementById('telspan').textContent = "קלט לא מתאים";
        val = false;
    }
    else{
        document.getElementById('phone').className = 'row';
    }

    if(document.getElementById('email').value==''){
        document.getElementById('mail').className += ' invalid';
        document.getElementById('mailspan').textContent = "שדה חובה";
        val = false;
    }
    else if(!document.getElementById('email').value.match(mailformat)){
        document.getElementById('mail').className += ' invalid';
        document.getElementById('mailspan').textContent = "קלט לא מתאים";
        val = false;
    }
    else{
        document.getElementById('mail').className = 'row';
    }
    return val;
}