import React, { Fragment, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Banner } from "../../components/UI";
import {
	ProductDetails,
	ProductInfo,
	ProductOfferings,
} from "../../containers/Product";
import { fetchProductBySlug } from "../../redux/Products/actions";

const ProductPage = () => {
	const { slug } = useParams();
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductBySlug(slug));
	}, [slug, dispatch]);

	return (
		<Fragment>
			<Banner path={pathname} />
			<ProductDetails slug={slug} />
			<ProductInfo />
			<ProductOfferings />
		</Fragment>
	);
};

export default ProductPage;
