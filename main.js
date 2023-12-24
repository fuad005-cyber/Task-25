// TASK 1 --> Konsola mesaj verin: «My name is Fuad».
// console.log("My name is Fuad")


// TASK 2 --> Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.Bu dəyişənin dəyərini konsolda göstərin.
// let userName = 'Fuad'
// console.log(userName)


// TASK 3 --> Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.Birdən çox variant seçin.
// person, console, $add


// TASK 4 --> Depodaki bütün kitabların ümumi dəyərini konsola çıxarın Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənindəvə depodaki kitab sayı bookAmount dəyişənində saxlanılır.Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// let bookPrice = 750;
// let bookAmount = 14;
// let allPrice = bookPrice * bookAmount
// console.log(allPrice)


// TASK 5 --> Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə» dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.msSpeed dəyişəninin dəyərini konsola çıxarın.
// let kmhSpeed = 75;
// let msSpeed = kmhSpeed * 1000 / 3600
// console.log(msSpeed)


// TASK 6 --> İstifadəçinin doğum tarixini soruşan və bu ə qədər ğı günlərin sayını göstərən proqram yazın.
// let birthDate = prompt("doğum tarixini daxil edin:")
// let toDay = alert("Siz " + (2023 - birthDate) * 365 + " gün yaşadıniz") 


// TASK 7 --> Ədədlər üzərində əməliyyatları yerinə yetirin. num dəyişənində iki rəqəmli ədəd saxlanılır.Konsola çıxaran belə proqram yazın:- Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.- 3-ə bölünmədən qalan bu ədədin qalığını.
// let num = 5
// let numberDegree = num ** 5
// let numDivide = 5%3
// console.log(numberDegree, numDivide)


// TASK 8 --> Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].Tanışlığımıza çox şadam!”firstName dəyişənində istifadəçinin adı,lastName — dəyişənində isə soyadı saxlanır.Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”=>let firstName = 'Alan';=>let lastName = 'Turing';
// let firstName = prompt("Adınızı daxil edin")
// let lastName = prompt(" Soyadınızı daxil edin")
// console.log("Sizin adınız " + firstName + lastName + " Tanışlığımıza çox şadam!")


// TASK 9 --> Şablon mətnlərdən istifadə edərək,konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.
// let firstName = prompt("Adınızı daxil edin")
// let lastName = prompt(" Soyadınızı daxil edin ")
// console.log("Sizin bir daha görməyimizə şadıq " + firstName + lastName )

// TASK 10 -->Addaki hərflərin sayını konsola çıxarın.fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.Probel hərf olaraq sayılmır.let fullName = "Murad Orucov"
// let fullName = "Fuad Azizov"
// console.log(fullName.length - 1)




// TASK 11 --> İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini konsola çıxaran proqram yazın.

// let fullName = prompt("Adinizi ve soyadinizi daxil edin")
// let shortName = fullName.indexOf(" ") + 1 ;
// console.log(fullName[0], fullName[shortName]); 

// TASK 12 --> İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,
// let userName = prompt("Adinizi daxil edin")
// let userSurname = prompt("Soyadinizi daxil edin")
// console.log(userSurname + userName)


// TASK 13 --> Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.İstifadəçidən adını daxil etməsini istəyin.Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// let userName = prompt("Adinizi daxil edin")
// console.log("Salam, " + userName + "!")


// TASK 14 --> İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsolaa lt-alta 4 sətir olaraq çıxarın.
// let user1 = prompt("Birinci ededi daxil edin")
// let user2 = prompt("Ikinci ededi daxil edin")
// console.log(user1 + user2)
// console.log(user1 - user2)
// console.log(user1 * user2)
// console.log(user1 / user2)


// TASK 15 --> 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın   !!!!
// let num1 = "12345"
// let num2 = "98765"
// console.log((num1 * num2).indexOf(6))


// TASK 16 --> Əməliyyatların nəticəsini müəyyənləşdirin.
// 1) 10, 2)-10 , 3) NaN , 4) 2 , 5) 9px , 6)  $45 , 7) 2 , 8) NaNpx , 9)  infinity , 10) -95 , 11) -14, 12) 1 , 13) NaN


// TASK 17 --> Rəqəmlərin cəmini göstərən proqram yazın.İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.
// let number = prompt("4 reqemli bir eded daxil edin")
// console.log(+number[0] + +number[1] + +number[2] + +number[3]);

// TASK 18 -->  İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və konsola «Salam, <ad>!» mesajını çıxarır.
// let userInfo = prompt("Adinizi ve Soyadinizi daxil edin:");
// let [userName, userSurname] = userInfo.split(" ");
// console.log("Salam, " + userName + "!");


// TASK 19 --> Qiyməti mətn halına salan proqram tərtib edin.İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.
// let value = prompt("Daxil edin!", "530.90")
// let arr = value.split(".")
// console.log(`${arr[0]} manat ${arr[1]} qepik`);

// TASK 20 --> Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.Proqram istifadəçidən əmək haqqı məbləğin soruşur və 13% vergi istisna olmaqla məbləği konsola çıxarır.
// let payMent = +prompt("əmək haqqı məbləğin daxil edin: ")
// let tax = (payMent * 13 ) / 100 
// console.log(payMent - tax)


// TASK 21 --> İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin. Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».
// let fullName = prompt("soyad, ad və ata adını daxil edin")
// let arr = fullName.split(" ")
// let lastName = arr[0]
// let firstNameFirstLetter = arr[1][0]
// let fatherNameFirstLetter = arr[2][0]
// console.log(`${lastName} ${firstNameFirstLetter}.${fatherNameFirstLetter}`);

// TASK 22 --> Depozitdən mənfəətin hesablanması üçün proqram yazın.Proqram istifadəçidən əmanətin məbləğini, müddətini və faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// let num = prompt("əmanətin məbləğini daxil edin")
// let period = prompt("nece illik oldugunu daxil edin")
// let percent = prompt("faiz dərəcəsini daxil edin")
// let all = ((num * percent) / 100 ) * period
// console.log(all)


// TASK 23 --> Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.
// let value1 = 10
// let value2 = 20 
// console.log(value1 > value2);
// console.log(value1 < value2);
// console.log(value1 >= value2);
// console.log(value1 <= value2);
// console.log(value1 != value2);


// TASK 24 --> 
// let age = prompt("Yasinizi daxil edin")
// if (age < 18) {
//     console.log("Access denied")
// }
// else {
//     console.log("Access granted");
// }


// TASK 25 -->
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// TASK 26 -->
// let year = prompt("Ili daxil edin:")
// if (year % 4 == 0 ) {
//     console.log("Il uzundu");
    
// }
// else {
//     console.log("Il uzun il deyil");
// }



// TASK 27 --> 
// let id = prompt('enter product id:')

// switch (id) {
//     case "1":
//         alert ('Available 10 pcs.');

        
//         break;
//     case "2":
//         alert('Available 256 pcs.')
//         break
//     case "3":
//         alert('Available 53 pcs.');
//         break
//     case "4":
//         alert('There are 3 available.');
//         break

//     default:
//         alert('Out of stock');
//         break;
// }


//  TASK 28 -->
// let gender = prompt("Cinsinizi daxil edin (M ve ya F)")
// if ( gender == "M") {
//     alert("Cinsiniz Kişidir")
    
// }
// else if ( gender == "F") {
//     alert("Cinsiniz Qadındır")
    
// } else {
//     alert("Səhv məlumat daxil etmisiniz")
    
// }


// TASK 29 --> 

// let nameOfMonth = prompt("ayın nömrəsini daxiledin:")
// if (nameOfMonth == 1) {
//     console.log("Yanvar");    
// }
// else if (nameOfMonth == 2) {
//     console.log("Fevral");
// }
// else if (nameOfMonth == 3) {
//     console.log("Mart");
// }
// else if (nameOfMonth == 4) {
//     console.log("Aprel");
// }
// else if (nameOfMonth == 5) {
//     console.log("May");
// }
// else if (nameOfMonth == 6) {
//     console.log("Iyun");
// }
// else if (nameOfMonth == 7) {
//     console.log("Iyul");
// }
// else if (nameOfMonth == 8) {
//     console.log("Avqust");
// }
// else if (nameOfMonth == 9) {
//     console.log("Sentyabr");
// }
// else if (nameOfMonth == 10) {
//     console.log("Oktyabr");
// }
// else if (nameOfMonth == 11) {
//     console.log("Noyabr");
// }
// else if (nameOfMonth == 12) {
//     console.log("Dekabr");
// }
// else {
//     console.log("Sehv melumat daxil etmisiniz");
// }


// TASK 30 -->
// let date = prompt("tarixi daxil edin, Expample: 2009.12.19")
// let arr = date.split(".")

// console.log(`${arr[0]} -cu(ci) il ${arr[2]}  `);
















    





























