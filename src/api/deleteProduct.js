export const deleteProduct = async (productId) => {
    try {
        const res = await fetch(
            'http://ec2-54-233-173-244.sa-east-1.compute.amazonaws.com:8083/produto/' + productId,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'DELETE'
            }
        );
    
        return 200;

    } catch (error) {
        console.error(error);
    }

}