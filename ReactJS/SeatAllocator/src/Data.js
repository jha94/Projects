export const seats = {
    Club:
    {
      A: [
        { 
          availability:'available',
          active:true,
        },
        {
          availability:'not available'
        }
      ],
      
      B: [
        { 
          availability:'available',
          active:true,
        },{
          availability:'booked',
        }, {
          availability:'not available'
        }
      ]
    },
    Regular:{
      A:[
        {
          availability:'available',
          active:true,
        },{
          availability:'not available',
        }
      ],
      B:[
        { 
          availability:'available',
          active:true,
        },{
          availability:'not available'
        },{
          availability:'available',
          active:true,
        }
      ],
      C:[
        {availability:'booked'},
        {availability:'booked'}
      ]}
  }