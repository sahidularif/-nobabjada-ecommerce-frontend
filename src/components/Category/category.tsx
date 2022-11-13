import React from "react";
import "../../styles/style.css";
import cate1 from "../../images/sspeaker.jpg";
import cate2 from "../../images/headphone.jpg";
import cate3 from "../../images/swatch.jpg";
const Category = () => {
  return (
    <section className="product-category section">
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<div className="category-box">
					<a href="#!">
						<img src={cate1} alt="" />
						<div className="content">
							<h3>Amazing music player</h3>
							<p>Shop New Season Clothing</p>
						</div>
					</a>	
				</div>
				<div className="category-box">
					<a href="#!">
						<img src={cate2} alt="" />
						<div className="content">
							<h3>Smart Casuals</h3>
							<p>Get Wide Range Selection</p>
						</div>
					</a>	
				</div>
			</div>
			<div className="col-md-6">
				<div className="category-box category-box-2">
					<a href="#!">
						<img src={cate3} alt="" />
						<div className="content">
							<h3>Smart watch</h3>
							<p>Special Design Comes First</p>
						</div>
					</a>	
				</div>
			</div>
			
		</div>
	</div>
</section>
  );
};

export default Category;
