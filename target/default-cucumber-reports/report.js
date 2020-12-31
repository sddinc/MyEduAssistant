$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/customer.feature");
formatter.feature({
  "name": "Go to Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify SSN",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "user enter valid ssn",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userEnterValidSsn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to searchButton on create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToSearchButtonOnCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check FirstName should see textBox",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.checkFirstNameShouldSeeTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "put  \"Robert\" into create firstname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateFirstnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sabin\" into create lastname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateLastnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"R.S.\" into middle initial customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMiddleInitialCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"infor@gmail.com\" into mail customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMailCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"412-123-4589\" into mobile phoneNumber",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMobilePhoneNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"123-485-7889\" into phonenumber customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoPhonenumberCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"900180\" into zibcode customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoZibcodeCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"izmir buca\" into address customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoAddressCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sakarya\" cityForm into create customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putCityFormIntoCreateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"789-45-9523\"into ssnForm customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoSsnFormCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select date into customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectDateIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select country from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectCountryFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"USA\" into state customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoStateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select user from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectUserFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select  account from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectAccountFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-address on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message under address textbox \"This field is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderAddressTextbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-city on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see an error message under city textbox \"This field is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldSeeAnErrorMessageUnderCityTextbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-country on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "put  \"Robert\" into create firstname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateFirstnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sabin\" into create lastname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateLastnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"R.S.\" into middle initial customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMiddleInitialCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"infor@gmail.com\" into mail customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMailCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"412-123-4589\" into mobile phoneNumber",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMobilePhoneNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"123-485-7889\" into phonenumber customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoPhonenumberCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"900180\" into zibcode customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoZibcodeCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"izmir buca\" into address customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoAddressCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sakarya\" cityForm into create customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putCityFormIntoCreateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"789-45-9523\"into ssnForm customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoSsnFormCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select date into customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectDateIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select country from customer form index \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectCountryFromCustomerFormIndex(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"USA\" into state customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoStateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select user from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectUserFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select  account from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectAccountFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be seen error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldBeSeenErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click to login icon",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToLoginIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click link sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickLinkSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as  \"team21user\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as  \"team21User\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.LoginStepsDefinitions.userClickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to my operations link",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToMyOperationsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clcik to manage customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClcikToManageCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to button create new customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userClickToButtonCreateNewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data validation-state on create customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateCustomer"
    }
  ]
});
formatter.step({
  "name": "put  \"Robert\" into create firstname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateFirstnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sabin\" into create lastname form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoCreateLastnameForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"R.S.\" into middle initial customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMiddleInitialCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"infor@gmail.com\" into mail customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMailCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"412-123-4589\" into mobile phoneNumber",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoMobilePhoneNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"123-485-7889\" into phonenumber customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoPhonenumberCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"900180\" into zibcode customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoZibcodeCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"izmir buca\" into address customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoAddressCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"Sakarya\" cityForm into create customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putCityFormIntoCreateCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "put \"789-45-9523\"into ssnForm customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.putIntoSsnFormCustomerForm(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select date into customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectDateIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select country from customer form index \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectCountryFromCustomerFormIndex(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "leave blank into state customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.leaveBlankIntoStateCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select user from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectUserFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select  account from customer form",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.selectAccountFromCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to save button into customer form",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.clickToSaveButtonIntoCustomerForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be seen error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.CreateCustomerStepDefinitions.userShouldBeSeenErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});