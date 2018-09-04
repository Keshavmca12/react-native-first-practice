class APIs {

    constructor() {
        this.baseUrl = "https://172.16.16.72:8080/kettle-crm/";
        this.CUSTOMER_ROOT_CONTEXT = this.baseUrl + "customer/rest/v1/";

        this.urls = {
            customer: {
                lookup: this.CUSTOMER_ROOT_CONTEXT + "lookup"
            }
        }
        this.getUrls = this.getUrls.bind(this);
    }

    getUrls() {
        return this.urls;
    }
    
}

const apis = new APIs();
export default apis;