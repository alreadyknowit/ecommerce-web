import {Oval, Rings} from "react-loader-spinner";


export const PageSpinner=()=>{
    return (
        <Rings
            height="80"
            width="80"
            color="#f1356d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
        />
    )
}


export const ButtonSpinner=()=>{

    return(
        <Oval
            height={18}
            width={18}
            color="#f1356d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    )
}
