export const getLogin = async (email, password, type) => {
    try {
        const res = await fetch(
            'http://ec2-54-233-173-244.sa-east-1.compute.amazonaws.com:8083/' + type + '/login/' + email + '/' + password,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            }
        );
    
        const result = await res.json();
        return result;

    } catch (error) {
        return 404;
    }

}

