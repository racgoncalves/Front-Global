export const putProduct = async (productObject) => {
    try {
        const res = await fetch(
            'http://ec2-54-233-173-244.sa-east-1.compute.amazonaws.com:8083/produto/' + productObject.id,
            {
                body: JSON.stringify(productObject),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'PUT'
            }
        );
    
        const result = await res.json();
        return result;

    } catch (error) {
        console.error(error);
    }

}