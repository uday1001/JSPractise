function Users () {
	return {
		fname:"First Name",
		lname:'Lastname',
		fullName:this.fname +" "+ this.lname,
		age:null,
		ageGroup:function(){
			if(this.age<=12  && this.age>0){
				return 'Kid';
			}else if(this.age>=13){
				return 'Teenager';
			}
		}
	}
}

