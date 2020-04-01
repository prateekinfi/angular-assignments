interface Transaction{
    type : String ;
    amount : String ;
}

function Logger () {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(`Transaction successful.`);
    }
}

function CustomerId(id: any) {
    return function(target: any) {
        Object.defineProperty(target, "id", {
            value: id
        })
    }
}
function CustomerName(name: any) {
    return function(target: any) {
        Object.defineProperty(target, "name", {
            value: name
        })
    }
}

function Entity(target: any) {
    console.log('inside entity decorator!');
}


@Entity
@CustomerId(3)
@CustomerName("Prateek Garg")
class Customer {
    transactionDetails: Transaction;

    constructor (private transaction: Transaction={type:"withdraw",amount:"100000"}) {
        this.transactionDetails = transaction;
    }
    @Logger()
    public performTransaction(): void{
        console.log(`${this.transactionDetails.type} - ${this.transactionDetails.amount} on ${new Date()}`)
    }
}


let customer = new Customer();
customer.performTransaction();