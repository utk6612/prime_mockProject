

export function traderItems(state = [], action) {
    switch (action.type) {
        case 'TRADERS_FETCH_DATA_SUCCESS':
            return action.traders;

        default:
            return state;
    }
}

export function stockItems(state = [], action) {
    switch (action.type) {
        case 'STOCKS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
export function newUser(state=[],action){
    switch(action.type){
        case 'SELECT_USER_NAME':
            return action.user;

        default:
            return state;    
    }
}

export function orders(state=[],action){
    switch(action.type){
        case 'ORDERS_FETCH_DATA_SUCCESS':
            return action.orders;
        case 'orderCreatedEvent':
            return [...state,action.data];
        case 'allOrdersDeletedEvent':
            return [];
        case 'placementCreatedEvent':
            for(let i=0;i<state.length;i++)
                if(state[i].id === action.data.orderId )
                {
                    console.log("found");
                    state[i].quantityPlaced+=action.data.quantityPlaced;
                    state[i].status=action.data.status;
            }
            console.log("aknxdax:",state);
            return [...state];
        case 'executionCreatedEvent':
            for(let i=0;i<state.length;i++)
                if(state[i].id === action.data.orderId )
                {
                    state[i].quantityExecuted+=action.data.quantityExecuted;
                    state[i].status=action.data.status;
            }
            return [...state];                

        default:
            return state;    
    }
}

export function setView(state=1,action){
    switch(action.type){
        case 'VIEW_CHANGED':
            return action.view;
        default:
            return state;    
    }
}

export function auth(state=false,action){
    switch(action.type){
        case 'FLAG':
            return action.flag;
        default:
            return state;    
    }
}