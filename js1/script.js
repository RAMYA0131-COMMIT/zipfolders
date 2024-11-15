// console.log("hello")
// document.write("hello world")

/* const la kudtha error adikum*/
// const a= 10
// a=2
// console.log(a)

/* let la panna varo */
// let a= 10
// a=2
// console.log(a)

/* var la panna varo*/
/* let ko var ko ena vethiysam na var la ensistionlization matha mudium ,let la vanthu enistionlization ne matha*/
// var a= 10
// var a=2
// console.log(a)

/* divide mudilo */
// var a= 10
// b=5
// console.log(a/b)
// console.log(a%b)

/**if statement if la true or false varo*/
// var a=16
// if(a>5)
// {
//    console.log(a)
// }

/* && operator vanthu rendu condtion true va eruka illa false eruka nu check pandrathuku , ethula ethachi onnu true va eruthale output vanthuro */
// var a=7
// if(a>5&&a<10)
// {
//    console.log(a)
// }

/*OR || operator la vanthu oru statement true va eruthalum output vanthuro*/
// var a=7
// if(a>5||a>10)
// {
//    console.log(a)
// }

/*if else ethu illa na athu true va erutha output varo */
/*&& AND operator apro || Or operator ro ethuku use pandro na more than one condition ponna check pandrathuku */
/*&& AND operator vanthu rendu condition niyao satisfie panna no 
|| OR na oru condition true aana le ulla poido,  output vanthuro */
// var a=2
// if(a>5||a>10)
// {
//    console.log(a)
// }
// else
// {
//     console.log("condition failed")
// }

/*positive number and negative number */
// var a=-2
// if(a>0)
// {
//    console.log("postive number")
// }
// else
// {
//     console.log("negative number")
// }

/*'' cootestion ku ulla kudutha string  */
/*== la valu rendu me equal la check pandrathu */
/*=== la valu apro data type rendume equal la nu check pandrathu */
// var a=10
// var b='10'
// if(a===b)
// {
//    console.log("equal")
// }
// else
// {
//     console.log("not equal")
// }


/*rendume equal la eruka kudathu na != use pannu vo */
/*data type vo equal la eruka kudtha na !== rendu equal podu vo */
/*rendo same eruthuchi na if kulla erukrthu excicute agga kudathu */
// var a=10
// var b='10'
// if(a!=b)
// {
//    console.log("not equal")
// }
// else
// {
//     console.log("equal")
// }


/*odd or even number */
// const a=6
// if(a%2==0)
// {
//     console.log("even")
// }    
// else
// {
//     console.log("odd")
// }


/*loop kulla loop vanthu nested if loop */
// let a=2

// if(a==0)
// {
//     console.log("even or odd")
// }

// if(a>0)
// {
//          if(a%2==0)
// {
//     console.log("even")
// }    
// else
// {
//     console.log("odd")
// }
// }


/*ore problem ku multiple solution eruku answe mattum varno */

// const a=2
// if(a%2==0)
// {
//     console.log("even")
// }
// else if(2==0)
// {
//     console.log("even or odd")
// }
// else
// {
//     console.log("odd")
// }


/*while vanthu ENTRE condition DO vanthu exit condition  */
/*DO vanthu first run aggum whil vanthu second run aggum */
/*do while ena panno na first excuite pannon apro conditon check panno*/
// var a=0
// while(a>2)
// {
//     console.log(a)
//     a++
// }


// var a=10
// while(a>0)
// {
//     console.log(a)
//     a--   
// }


/*i vanthu contol statement, i loop control statement  */
// var a=10
// for(i=0;i<5;i++)
// {
//     console.log(a)
//     a++
// }

/*Math and random function print any random number */
// const a=10.5
// console.log(Math.random()*10)

/*Math.floor vanthu decimal points remove pannu */
/*floor vanthu kela erukura value va round up panno for 6.9 na erutha 6 nu eduthuko  */
// const a=10.5
// console.log(Math.floor(Math.random()*10))

/*ceil vanthu upper value ku round up pannido 6.4 eruthalum 7 ku round up pannido, Ethula *10 ethuku kudukro na 0 to 10 variko value varno solli kudukuro  */
// const a=10.5
// console.log(Math.ceil(Math.random()*10))


/*break and continue looping statements la use pannvainga*/
/*break vanthu loop pa terminate pandro */
/*continue vanthu current loop pa terminate pandro apro antha continue lenthu apdiye mela poido kela erukura block current loop la exciute panna mela poido, control vanthu starting loop ku poido*/

// let a=0
// while(a<6)
// {
//     if(a==4)
//     {
//         a++;
//         continue
//     }
//     console.log(a)
//     a++
// }

/*veliya runthu function call pandrathu,hello vanthu function kulla */
/*local varible la parametres solluvo,number add pandra edatha arguments nu solluvo */
// function add(a,b)
// {
//     console.log(a+b)
// }

// add(5,10)
// add(2,2)


/*arguments la rendu valu illa na mela namba parameters la value kudthu default parameter kudupo*/

// function add(a,b=8)
// {
//     console.log(a+b)
// }

// add(5)
// add(2,2)

/*add function la parameters la value kudthu default illa na variable name assign panni athukulla arguments pass panni return key word kudthu result veliya nambuluku kuduthuro */
/*sum vanthu ella arguments so value vo add panni sum ma return pannu la */

// function add(a,b=8)
// {
//     sum=a+b
//     return sum
// }

// function multiply(a)
// {
//     return a*10
// }

// const result=add(10,4)
// console.log(multiply(result))

/*Greater */
// let a=66
// let b=15
// let c=98

// if(a>b&&a>c)
// {
//     console.log("a is greater")
// }
// else if(b>a&&b>c)
// {
//     console.log("b is greater")
// }
// else
// {
//     console.log("c is greater")
// }


/*Tearnari operator */
// let a=63
// let b=432
// let c=500

// a>b?console.log("a is greater"):console.log("b is greater")

// a>b&&a>c?console.log("a is greater"):b>c?console.log("b is greater"):console.log("c is greater")

/* Objects  */
// let a={
//     name:"arun",age:45
// }
// console.log(a.name)

/*Array (index 0,1,2,3 ) */
/*null apro undeined do vera vera */
// let a=[5,68,7,9,0]
// console.log(a[3])

// console.log(null===undefined)

/*array oda length apro i oda lenth */
// let a=[5,68,7,9,0]
// console.log(a.length)
// for(i=0;i<a.length;i++)
// {
//     console.log(a[i])
// }


// let a=[5,68,7,9,0]
// sum=0
// for(i=0;i<a.length;i++)
// {
//     sum=sum+a[i]
// }
// console.log(sum)