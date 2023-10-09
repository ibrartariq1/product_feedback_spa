import Api from "./Api";

const util = {
    async auth_middleware(app, event = null, type = null) {
        
        
        if (app.$route.meta.onlyGuest) {
          
            return;
        }
        if (!type) type = "visit";
        let path = app.$route.path;

        if (event) {
            path = event;
           
        }

        let token = localStorage.getItem("participant_token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json",
            },
            params: {
                type: type,
                event: path,
            },
        };

        // app.$store.commit("auth_headers", config);
        Api.get("/user", config)
            .then((res) => {
                console.log('%cutil.js line:41 res', 'color: #007acc;', res);
                if (!res.data.error) {
                    app.$store.commit("user", res.data.user);
                    return
                } else {
                    if (app.$route.meta.requiresAuth) {
                        this.redirectToHome(app);
                    }
                }
            })
            .catch((res) => {
                console.log('%cutil.js line:57 res', 'color: #007acc;', res);
                localStorage.removeItem('participant_token');
                if (app.$route.meta.requiresAuth) {
                    this.redirectToHome(app);
                }

            });
    },
    redirectToHome(app) {
        app.$router.push("/");
    },
   


};
export default util;