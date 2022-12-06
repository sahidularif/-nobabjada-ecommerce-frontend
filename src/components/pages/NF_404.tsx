import React from 'react';
import logo from '../../nobabjada-2.png'
const NF_404 = () => {
    return (
        <section className="page-404">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<a href="/">
						<img src={logo} alt="site logo" />
					</a>
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<a href="/" className="btn btn-main"><i className="tf-ion-android-arrow-back"></i> Go Home</a>
					<p className="copyright-text">© MS-DEV All Rights Reserved</p>
				</div>
			</div>
		</div>
	</section>
    );
};

export default NF_404;