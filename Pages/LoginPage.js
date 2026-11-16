class LoginPage{


    constructor(page){
         this.page=page;
         this.username =page.getByPlaceholder('student');
         this.password=page.getByPlaceholder('••••••••');
         this.submit=page.getByTestId('login-submit-button');
         this.practice=page.locator('[data-pw-setting-text="homepage.hero_cta.label"]');

    }

    async navigate(){
        
        await this.page.goto('/login.html');

    }

    async login(userName,password){

        await this.username.fill(userName);
        await this.password.fill(password);
        await this.submit.click();
        await this.practice.click();


    }
}
module.exports={LoginPage};