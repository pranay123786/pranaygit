
class restaurantManager{
    restaurantList = [{
        id: 1,
        restaurantName: 'KFC',
        address: 'Anand Vihar',
        city: 'Delhi'
    },
    {
        id: 2,
        restaurantName: 'Domino',
        address: 'Savita Vihar',
        city: 'Delhi'
    },
    {
        id: 3,
        restaurantName: 'Burger King',
        address: 'Civil Lines',
        city: 'Pune'
    },
    {
        id: 4,
        restaurantName: 'Subway',
        address: 'Cantonment',
        city: 'Mumbai'
    }]
    
    printAllRestaurantNames = () => {
        
        for(let x of this.restaurantList)
        {
            
            console.log(this.restaurantList[x.restaurantName])
        
        }
    }

    filterRestaurantByCity = (city) => {
        let restCity = this.restaurantList.filter(this.restaurantList[city])
        console.log(restCity)
    }
}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames(); 
restaurantObj.filterRestaurantByCity('Pune');

// 2
// (a)
 let orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };
    for(x in orderData){
        values = orderData[x]
        let totalOrders = values.forEach(n => {
            this.reduce((a,b) => a+b)
            console.log(`Total number of orders placed = ${totalOrders}`)
        })
    }

// (b)
const proportionObj = Object.keys(orderData);
console.log(proportionObj)

// (c)
const result = headers.map((item, index) => {  
    return {
      'id': index + 1,
      'order': item,
      'order percentage': ((orderData[item] / total) * 100).toFixed(2)
      'restaurant': 'Punjabi Tadka',
    }
    console.log(result);
  })
    