import { useEffect } from 'react'

const Even = () =>  {
    useEffect(() => {
        return () => { console.log("unmount") } // 언마운트 : 죽음
    }, [])
    return (
        <div>
            짝수입니다.
        </div>
    )
}

export default Even;