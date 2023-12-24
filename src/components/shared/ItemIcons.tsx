import { FontAwesome5 } from '@expo/vector-icons';



export function ItemIconsComponent({name}){

    const itemIcons = [
        {
            name: 'fun',
            icon: <FontAwesome5 name="smile-beam" size={15} color="black" />
        },
        {
            name: 'food',
            icon: <FontAwesome5 name="hamburger" size={15} color="black" />
        },
        {
            name: 'selfcare',
            icon: <FontAwesome5 name="hands" size={15} color="black" />
        },
        {
            name: 'passion',
            icon: <FontAwesome5 name="heart" size={15} color="black" />
        },
        {
            name: 'travel',
            icon: <FontAwesome5 name="plane-departure" size={15} color="black" /> 
        }
    ]
    
    let selected = itemIcons.map(element => {
        if(element.name === name) {
            return element.icon
        }
    });
    
    return(
        <>
            {selected}
        </>
        
        
    )

    
}