import React from 'react';

const Home = () => {
    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0">

                    <div class="col-md-6 mt-5">
                        <div class="card-body mt-5 mx-5 p-5">
                            <h1 class="card-title display-2">Welcome to Jawad's Recipe</h1>
                            <p class="card-text fs-4">Prepare Meals According to Your Choice  <br /> and Dietary Preference</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="1.png" style={{ height: '80vh', width: "800px" }} class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;