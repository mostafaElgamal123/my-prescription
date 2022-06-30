$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        375:{
           items:2
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
})
/* js btn more categories */
$('.categories').addClass('solv-height');
$('.more span').click(function(){
    $('.categories').toggleClass('solv-height');
})

/* js items section */
$('.open-section').click(function(){
      $('.items-sections').toggleClass('hide');
      $('.open-section').toggleClass('active');
})

/* js menu toggle */

$('.toggle').click(function(){
    $('.header .menu .menu-list').toggleClass('hiddin');
})
$('.toggle-dash').click(function(){
    $('.dash-header .dash-menu nav').toggleClass('show');
})
/* js loading */
$(document).ready(function(){
    $('.loading').css('display','none');
})
//data doctor
let dataDoctor=[
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa elgamel',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    {
        title:'mostafa',
        image:'content/images/images-section/doctor-img/istockphoto-1161336374-612x612.jpg',
        Seloction:'cairo',
        specialty:'eyes',
        rate:'4.9',
    },
    
]

localStorage.setItem('userDoctor',JSON.stringify(dataDoctor));
if (localStorage.userDoctor!=null){
    dataDoctor=JSON.parse(localStorage.userDoctor);
    $(document).ready(function(){
        displayDataDoctor();
    })
    $(document).ready(function(){
        displayDataSearchDoctor();
    })
}else{
    dataDoctor=[];
}
function displayDataDoctor(){
    let text='';
    for(let i=0;i<dataDoctor.length;i++){
        text+=`
        <div class="col-12 col-md-4">
            <div class="content-box">
                <div class="datelis-doc">
                    <img src="${dataDoctor[i].image}" alt="">
                    <h2>${dataDoctor[i].title}</h2>
                    <p>${dataDoctor[i].Seloction}</p>
                    <a href="doctor-profile.html">
                        Stomach
                    </a>
                </div>
                <div class="call-details">
                    <p>
                        <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                        <span>0112245867</span>
                        </p>
                    <p>
                        <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                        <span>240$</span>
                    </p>
                </div>
                <div class="rate-doc">
                    <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                    <span>4.9</span>
                </div>
                <div class="check-doc">
                    <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        `;
    }
        document.getElementById('tobodyDoctor').innerHTML=text;
        pagination();
}
//search
let moodSearch='search-by title';
function selectTypeSearch(id){
    if(id==='search'){
        moodSearch='search-by title';
    }else{
        moodSearch='search-by setlocation';
    }
}
function searchDoctor(valueSearch){
    let text='';
    if(moodSearch==='search-by title'){
        for(let i=0;i<dataDoctor.length;i++){
            if(dataDoctor[i].title.toUpperCase().includes(valueSearch)){
                text+=`
            <div class="col-12 col-md-4">
                <div class="content-box">
                    <div class="datelis-doc">
                        <img src="${dataDoctor[i].image}" alt="">
                        <h2>${dataDoctor[i].title}</h2>
                        <p>${dataDoctor[i].Seloction}</p>
                        <a href="doctor-profile.html">
                            Stomach
                        </a>
                    </div>
                    <div class="call-details">
                        <p>
                            <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                            <span>0112245867</span>
                            </p>
                        <p>
                            <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                            <span>240$</span>
                        </p>
                    </div>
                    <div class="rate-doc">
                        <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                        <span>4.9</span>
                    </div>
                    <div class="check-doc">
                        <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            `;
            }else{
                text=`
                <span> not found </span>
                `;
            }
        }
    }else{
        for(let i=0;i<dataDoctor.length;i++){
            if(dataDoctor[i].Seloction.toUpperCase().includes(valueSearch)){
                text+=`
            <div class="col-12 col-md-4">
                <div class="content-box">
                    <div class="datelis-doc">
                        <img src="${dataDoctor[i].image}" alt="">
                        <h2>${dataDoctor[i].title}</h2>
                        <p>${dataDoctor[i].Seloction}</p>
                        <a href="doctor-profile.html">
                            Stomach
                        </a>
                    </div>
                    <div class="call-details">
                        <p>
                            <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                            <span>0112245867</span>
                            </p>
                        <p>
                            <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                            <span>240$</span>
                        </p>
                    </div>
                    <div class="rate-doc">
                        <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                        <span>4.9</span>
                    </div>
                    <div class="check-doc">
                        <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            `;
            }else{
                text=`
                <span> not found </span>
                `;
            }
        }
    }
    document.getElementById('tobodyDoctor').innerHTML=text;
}
//pagination data doctor

function pagination(){
    let pageSize=6;
    let totalItem=dataDoctor.length;
    let totalPage=Math.ceil(totalItem/pageSize);
    let text='';
    for(let i=(pageSize-6);i<pageSize;i++){
        text+=`
        <div class="col-12 col-md-4">
            <div class="content-box">
                <div class="datelis-doc">
                    <img src="${dataDoctor[i].image}" alt="">
                    <h2>${dataDoctor[i].title}</h2>
                    <p>${dataDoctor[i].Seloction}</p>
                    <a href="doctor-profile.html">
                        Stomach
                    </a>
                </div>
                <div class="call-details">
                    <p>
                        <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                        <span>0112245867</span>
                        </p>
                    <p>
                        <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                        <span>240$</span>
                    </p>
                </div>
                <div class="rate-doc">
                    <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                    <span>4.9</span>
                </div>
                <div class="check-doc">
                    <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        `;
    }
    document.getElementById('tobodyDoctor').innerHTML=text;
    let textpagination='';
    for(let i=1;i<=totalPage;i++){
        textpagination+=`
        <li>
         <a class='btn-pagination' href="#!">${i}</a>
        </li>`;
    }
    document.querySelector('.pagination ul').innerHTML=`
    <li>
        <a id='prev' href="#!">prev</a>
    </li>
    ${textpagination}
    <li>
        <a id='next' href="#!">next</a>
    </li>
    `;
    let btnBagination=document.querySelectorAll('.btn-pagination');
    document.querySelectorAll('.pagination ul li')[1].classList.add('active');
    for(let i=0;i<totalPage;i++){
        btnBagination[i].addEventListener('click',function(){
            // let act=document.querySelectorAll('.pagination ul .active');
            // act[0].className=act[0].className.replace('active','');
            // this.className+='active';
            pageSize=((i+1)*6);
            console.log(pageSize)
            let text='';
            for(let i=(pageSize-6);i<pageSize;i++){
                text+=`
                <div class="col-12 col-md-4">
                    <div class="content-box">
                        <div class="datelis-doc">
                            <img src="${dataDoctor[i].image}" alt="">
                            <h2>${dataDoctor[i].title}</h2>
                            <p>${dataDoctor[i].Seloction}</p>
                            <a href="doctor-profile.html">
                                Stomach
                            </a>
                        </div>
                        <div class="call-details">
                            <p>
                                <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                                <span>0112245867</span>
                                </p>
                            <p>
                                <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                                <span>240$</span>
                            </p>
                        </div>
                        <div class="rate-doc">
                            <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                            <span>4.9</span>
                        </div>
                        <div class="check-doc">
                            <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                `;
            }
            document.getElementById('tobodyDoctor').innerHTML=text;
        })
    }
    let prev =document.getElementById('prev');
    let next =document.getElementById('next');
    prev.addEventListener('click',function(){
        if(pageSize>6){
            pageSize=pageSize-6;
        }else{
            pageSize=6
        }
        console.log(pageSize)
        let text='';
        for(let i=(pageSize-6);i<pageSize;i++){
            text+=`
            <div class="col-12 col-md-4">
                <div class="content-box">
                    <div class="datelis-doc">
                        <img src="${dataDoctor[i].image}" alt="">
                        <h2>${dataDoctor[i].title}</h2>
                        <p>${dataDoctor[i].Seloction}</p>
                        <a href="doctor-profile.html">
                            Stomach
                        </a>
                    </div>
                    <div class="call-details">
                        <p>
                            <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                            <span>0112245867</span>
                            </p>
                        <p>
                            <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                            <span>240$</span>
                        </p>
                    </div>
                    <div class="rate-doc">
                        <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                        <span>4.9</span>
                    </div>
                    <div class="check-doc">
                        <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById('tobodyDoctor').innerHTML=text;
    })
    next.addEventListener('click',function(){
        if(pageSize>=6&&pageSize<totalItem){
            pageSize=pageSize+6;
        }else{
            pageSize=totalItem;
        }
        console.log(pageSize)
        let text='';
        for(let i=(pageSize-6);i<pageSize;i++){
            text+=`
            <div class="col-12 col-md-4">
                <div class="content-box">
                    <div class="datelis-doc">
                        <img src="${dataDoctor[i].image}" alt="">
                        <h2>${dataDoctor[i].title}</h2>
                        <p>${dataDoctor[i].Seloction}</p>
                        <a href="doctor-profile.html">
                            Stomach
                        </a>
                    </div>
                    <div class="call-details">
                        <p>
                            <i class="icon-box fa fa-phone-alt" aria-hidden="true"></i>
                            <span>0112245867</span>
                            </p>
                        <p>
                            <i class="icon-box fa fa-money-bill-alt" aria-hidden="true"></i>
                            <span>240$</span>
                        </p>
                    </div>
                    <div class="rate-doc">
                        <i class="icon-rate fa fa-star" aria-hidden="true"></i>
                        <span>4.9</span>
                    </div>
                    <div class="check-doc">
                        <i class=" icon-check fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById('tobodyDoctor').innerHTML=text;
    })
}
/**search for doctor */
$('.btn-exist-search').click(function(){
    $('.items-search').css({display:'none'})
})
$('#click-search-home').click(function(){
    $('.items-search').css({display:'block'})
})
function displayDataSearchDoctor(){
    let text='';
    for(let i=0;i<dataDoctor.length;i++){
        text+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>
                    <div class="group-avater">
                        <img src="${dataDoctor[i].image}" alt="doctor avater">
                        <span>${dataDoctor[i].title}</span>
                    </div>
                </td>
                <td>${dataDoctor[i].rate}</td>
                <td>${dataDoctor[i].specialty}</td>
                <td>
                ${dataDoctor[i].Seloction}
                </td>
                <td>
                    <a class="btn-appoinment" href="doctor-profile.html">
                        appoinment
                    </a>
                </td>
            </tr>
        `;
    }
    document.getElementById('tbody-search-doctor').innerHTML=text;
}
let moodSearchHome='name';
let searchHome=document.getElementById('search-home');
function selectTypeSearchHome(id){
    if(id==='search-by-name'){
        moodSearchHome='name';
    }else{
        moodSearchHome='specialty';
    }
    searchHome.focus();
    searchHome.placeholder='search by '+moodSearchHome;
}
function searchHomeDoctor(value){
    if(moodSearchHome==='name'){
        let text='';
    for(let i=0;i<dataDoctor.length;i++){
        if(dataDoctor[i].title.toUpperCase().includes(value)){
            text+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>
                    <div class="group-avater">
                        <img src="${dataDoctor[i].image}" alt="doctor avater">
                        <span>${dataDoctor[i].title}</span>
                    </div>
                </td>
                <td>${dataDoctor[i].rate}</td>
                <td>${dataDoctor[i].specialty}</td>
                <td>
                ${dataDoctor[i].Seloction}
                </td>
                <td>
                    <a class="btn-appoinment" href="doctor-profile.html">
                        appoinment
                    </a>
                </td>
            </tr>
        `;
        }else{}
    }
    document.getElementById('tbody-search-doctor').innerHTML=text;
    }else{
        let text='';
    for(let i=0;i<dataDoctor.length;i++){
        if(dataDoctor[i].specialty.toUpperCase().includes(value)){
            text+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>
                    <div class="group-avater">
                        <img src="${dataDoctor[i].image}" alt="doctor avater">
                        <span>${dataDoctor[i].title}</span>
                    </div>
                </td>
                <td>${dataDoctor[i].rate}</td>
                <td>${dataDoctor[i].specialty}</td>
                <td>
                ${dataDoctor[i].Seloction}
                </td>
                <td>
                    <a class="btn-appoinment" href="doctor-profile.html">
                        appoinment
                    </a>
                </td>
            </tr>
        `;
        }else{}
    }
    document.getElementById('tbody-search-doctor').innerHTML=text;
    }
}
// appoinment data
let patientname=document.getElementById('patientname');
let appoinmentdate=document.getElementById('appoinmentdate');
let appoinmenttime=document.getElementById('appoinmenttime');
let btnappoinment=document.getElementById('btn-appoinment');
let dataAppoinment;
// get data appoinment
if(btnappoinment){
    btnappoinment.addEventListener('click',function(){
        getDataAppoinment();
    })
}else{}
if(localStorage.AppoinmentPatient!=null){
    dataAppoinment=JSON.parse(localStorage.AppoinmentPatient);
    $(document).ready(function(){
        displayDataAppoinment();
    })
}else{
    dataAppoinment=[];
}
function getDataAppoinment(){
    let newAppoinment={
        patientname:patientname.value,
        appoinmentdate:appoinmentdate.value,
        appoinmenttime:appoinmenttime.value,
    }
    if(patientname.value!=''&&appoinmentdate.value!=''&&appoinmenttime.value!=''){
        dataAppoinment.push(newAppoinment);
    }else{}
    localStorage.setItem('AppoinmentPatient',JSON.stringify(dataAppoinment));
    displayDataAppoinment();
}
function displayDataAppoinment(){
    let text='';
    for(let i=0;i<dataAppoinment.length;i++){
        text+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>${dataAppoinment[i].patientname}</td>
                <td>${dataAppoinment[i].appoinmentdate}</td>
                <td>${dataAppoinment[i].appoinmenttime}</td>
                <td>
                    <div class="group-btn">
                        <a onclick='deleteAppoinment(${i})' class="active" href="#!">
                            cancel
                        </a>
                        <a onclick='getdataFromDataAppoinment(${i},this.innerHTML)' href="#!">
                            accept
                        </a>
                        <a onclick='getdataFromDataAppoinment(${i},this.innerHTML)' href="#!">
                            waiting
                        </a>
                    </div>
                </td>
                <td>
                    <a onclick='deleteAppoinment(${i})' class="btn-delete" href="#!">
                        delete
                    </a>
                </td>
            </tr>
        `;
    }
    document.getElementById('tobody-appoinment').innerHTML=text;
}
//delete appoinmet
function deleteAppoinment(id){
    dataAppoinment.splice(id,1);
    localStorage.AppoinmentPatient=JSON.stringify(dataAppoinment);
    displayDataAppoinment();
}
//get data from dataAppoinment
let appoinmentaccept;
if(localStorage.AppoinmentPatientAccept!=null){
    appoinmentaccept=JSON.parse(localStorage.AppoinmentPatientAccept);
    displayAccept();
}else{
    appoinmentaccept=[];
}
function getdataFromDataAppoinment(id,valueCase){
    let fromDataAppoinment={
        patientname:dataAppoinment[id].patientname,
        appoinmentdate:dataAppoinment[id].appoinmentdate,
        appoinmenttime:dataAppoinment[id].appoinmenttime,
        case:valueCase,
    }
    console.log(valueCase)
    dataAppoinment.splice(id,1);
    localStorage.AppoinmentPatient=JSON.stringify(dataAppoinment);
    displayDataAppoinment();
    appoinmentaccept.push(fromDataAppoinment);
    localStorage.setItem('AppoinmentPatientAccept',JSON.stringify(appoinmentaccept));
    displayAccept();
}
function displayAccept(){
    let text='';
    for(let i=0;i<appoinmentaccept.length;i++){
        text+=`
                <tr>
                <th scope="row">${i+1}</th>
                <td>${appoinmentaccept[i].patientname}</td>
                <td>${appoinmentaccept[i].appoinmentdate}</td>
                <td>${appoinmentaccept[i].appoinmenttime}</td>
                <td>
                    <div class="group-btn">
                        <a class="active" href="#!">
                            ${appoinmentaccept[i].case}
                        </a>
                    </div>
                </td>
                <td>
                    <a onclick='deleteAppoinmentAccept(${i})' class="btn-delete" href="#!">
                        delete
                    </a>
                </td>
            </tr>
        `;
    }
    document.getElementById('tobody-appo-accept').innerHTML=text;
}
//delete appoinmet
function deleteAppoinmentAccept(id){
    appoinmentaccept.splice(id,1);
    localStorage.AppoinmentPatientAccept=JSON.stringify(appoinmentaccept);
    displayAccept();
}
/* js chat */
let btnChat=document.querySelector('.send_btn');
let textChat=document.querySelector('.type_msg');
let writing=document.querySelector('#writing');
let action_menu=document.querySelector('.action_menu');
let action_menu_btn=document.querySelector('#action_menu_btn');
let arraymassage=[];
let massageChat=document.querySelector('.msg_card_body');

action_menu_btn.addEventListener('click',function(e){
    action_menu.classList.toggle('active');
})




btnChat.addEventListener('click',function(){
    if(textChat.value!=''){
        addmassage();
        displaymassage();
     }
    writing.style.display='none';
    textChat.value='';
})
textChat.addEventListener('keyup',function(){
    if(textChat.value==''){
        writing.style.display='none';
    }else{
        writing.style.display='block';
    }
})
if(localStorage.arraymassage!=null){
    arraymassage=JSON.parse(localStorage.arraymassage)
        displaymassage();
}else{
    arraymassage=[];
}
//add massage in assay and localstorage
function addmassage(){
    let object={
        massage:textChat.value,
    }
 arraymassage.push(object);
 localStorage.setItem('arraymassage',JSON.stringify(arraymassage))
}
//add massage in card
function displaymassage(e){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let day = weekday[time.getDay()];
    let text='';
    for(let i=0 ;i<arraymassage.length;i++){
     text+=`
            <div class="d-flex hide justify-content-start mb-4">
            <div class="img_cont_msg">
                <img src="content/images/img_avatar.png" class="rounded-circle user_img_msg">
            </div>
            <div onclick='deleteMessage(${i})' class="msg_cotainer">
                ${arraymassage[i].massage}
                <span class="msg_time"><strong>${hours}</strong>:<strong>${minutes}</strong> <strong>${ampm}</strong>, <strong>${day}</strong></span>
                <div class="msg_option">
                <span>delet</span>
                </div>
            </div>
        </div>
    `
    }

    massageChat.innerHTML=text;
}

//search

let searchBtn=document.querySelector('.search_btn');
let search=document.querySelector('.search');
search.addEventListener('keyup',function(){
    searchDisplay();
})


function searchDisplay(){
    let search=document.querySelector('.search');
    let filter=search.value.toUpperCase();
    let li=document.querySelectorAll('ui li');
    for(let i=0;i<li.length;i++){
        let usernfo=li[i].querySelector('.user_info span');
        let flage=false;
        if(usernfo.innerHTML.toUpperCase().indexOf(filter) >-1){
            flage=true;
        }
        if(flage){
            li[i].style.display='';
        }else{
            li[i].style.display='none';
        }

    }
}

//select user

let li=document.querySelectorAll('ui li');
for(let i=0;i<li.length;i++){
    li[i].addEventListener('click',function(e){
        let headername=li[i].querySelector('.user_info span').innerHTML;
        let actv=document.querySelectorAll('.active-asd');
        actv[0].className = actv[0].className.replace("active-asd", "");
        this.className += "active-asd";
        document.querySelector('.msg_head .user_info span strong').innerHTML=headername;
    })
}



//deleted

let delet=document.querySelectorAll('.msg_option span');
let deletmore=document.querySelectorAll('.msg_cotainer')
let moreoption=document.querySelectorAll('.msg_option');
function deleteMessage(id){
    moreoption[id].classList.toggle('show');
}

for(let i=0 ;i<delet.length ;i++){
    delet[i].addEventListener('click',function(e){
        document.querySelectorAll('.hide')[i].classList.add('hidin');
        arraymassage.splice(arraymassage.indexOf(i),1);
        localStorage.setItem('arraymassage',JSON.stringify(arraymassage))
  })
}

/* js video call */
const webSocket = new WebSocket("ws://SERVER-IP-HERE:3000")

webSocket.onmessage = (event) => {
    handleSignallingData(JSON.parse(event.data))
}

function handleSignallingData(data) {
    switch (data.type) {
        case "answer":
            peerConn.setRemoteDescription(data.answer)
            break
        case "candidate":
            peerConn.addIceCandidate(data.candidate)
    }
}

let username
function sendUsername() {

    username = document.getElementById("username-input").value
    sendData({
        type: "store_user"
    })
}

function sendData(data) {
    data.username = username
    webSocket.send(JSON.stringify(data))
}


let localStream
let peerConn
function startCall() {
    sendUsername();
    document.getElementById("video-call-div")
    .style.display = "inline"

    navigator.getUserMedia({
        video: {
            frameRate: 24,
            width: {
                min: 480, ideal: 720, max: 1280
            },
            aspectRatio: 1.33333
        },
        audio: true
    }, (stream) => {
        localStream = stream
        document.getElementById("local-video").srcObject = localStream

        let configuration = {
            iceServers: [
                {
                    "urls": ["stun:stun.l.google.com:19302", 
                    "stun:stun1.l.google.com:19302", 
                    "stun:stun2.l.google.com:19302"]
                }
            ]
        }

        peerConn = new RTCPeerConnection(configuration)
        peerConn.addStream(localStream)

        peerConn.onaddstream = (e) => {
            document.getElementById("remote-video")
            .srcObject = e.stream
        }

        peerConn.onicecandidate = ((e) => {
            if (e.candidate == null)
                return
            sendData({
                type: "store_candidate",
                candidate: e.candidate
            })
        })

        createAndSendOffer()
    }, (error) => {
        console.log(error)
    })
}

function createAndSendOffer() {
    peerConn.createOffer((offer) => {
        sendData({
            type: "store_offer",
            offer: offer
        })

        peerConn.setLocalDescription(offer)
    }, (error) => {
        console.log(error)
    })
}

let isAudio = true
function muteAudio() {
    isAudio = !isAudio
    localStream.getAudioTracks()[0].enabled = isAudio
}

let isVideo = true
function muteVideo() {
    isVideo = !isVideo
    localStream.getVideoTracks()[0].enabled = isVideo
}

function callEnd(){
    localStream.getVideoTracks()[0].stop();
    document.getElementById("video-call-div")
    .style.display = "none";
}

//login js


let selectType =document.querySelectorAll('.select-type a');

for(let i=0;i<selectType.length;i++){
    selectType[i].addEventListener('click',function(){
        let act=document.querySelectorAll('.select-type .active');
        act[0].className=act[0].className.replace('active','');
        this.className+='active';
    })
}


//create database for user

// let email=document.getElementById('email');
// let password=document.getElementById('password');
// let confirmPassword=document.getElementById('confirmPassword');
// let setlocation=document.getElementById('setlocation');
// let phone=document.getElementById('phone');
// let btnRegister=document.getElementById('btn-register');
// let dataUser=[];

// btnRegister.addEventListener('click',function(){
//     getData();
// })

// if(localStorage.usersData!=null){
//     dataUser=JSON.parse(localStorage.usersData);
//     getData();
// }else{
//     dataUser=[];
// }

// function getData(){
//     let newData={
//         email:email.value,
//         password:password.value,
//         confirmPassword:confirmPassword.value,
//         setlocation:setlocation.value,
//         phone:phone.value,
//     }
//     dataUser.push(newData);
//     localStorage.setItem('usersData',JSON.stringify(dataUser));
// }
