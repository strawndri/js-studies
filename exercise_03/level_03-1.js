// 1.

const personAccount = {
    firstName: 'Andrieli',
    lastName: 'Gonçalves',
    incomes: [1000, 90, 180.90],
    expenses: [],
    totalIncome: function() {

        var totalIncomes = 0;
        this.incomes.forEach((element, i, incomes) => {
            totalIncomes += element
        })

        return totalIncomes
    },

    totalExpense: function() {
        var totalExpenses = 0;
        this.expenses.forEach((element, i, incomes) => {
            totalExpenses += element
        })

        return totalExpenses
    },

    accountInfo: function() {
        for (key in personAccount) {
            console.log(`${key} -> ${personAccount[key]}`)
        }
    },
    addExpense: function(value) {
        if(typeof(value) != 'string') {
            this.expenses.push(value)
        }
    },
    accountBallance: function() {

        let tIncomes = this.totalIncome()
        let tExpenses = this.totalExpense()

        let ballance = tIncomes - tExpenses

        return ballance
    }
}

console.log(personAccount.totalIncome())
console.log('---')

personAccount.addExpense(50)
console.log('---')

personAccount.accountInfo()
console.log('---')

console.log(personAccount.accountBallance())
console.log('---')

