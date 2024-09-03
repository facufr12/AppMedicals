/* eslint-disable */
// import node module libraries
import { Col, Row, Card } from 'react-bootstrap';

const Version020300 = () => {

	const NewSass = [
		'/src/assets/scss/theme/components/_transition.scss',
		'/src/assets/scss/theme/vendor/range-slider-input/_range-slider-input.scss',
		'/src/assets/scss/theme/vendor/react-select/_react-select.scss',
	];
	const NewMediaFiles = [
		'/src/assets/images/mentor/*.*'
	];
	const NewReactFiles = [
		'/src/components/marketing/landings/mentor/*.*',
		'/src/components/marketing/pages/mentor/*.*',
		'/src/components/marketing/common/modal-popup/SignUpModalPopup.js',
		'/src/components/marketing/common/call-to-action/CTAMentor.js',
		'/src/components/marketing/common/clientlogos/LogosTopBrands.js',
		'/src/components/marketing/common/cards/MenteeTestimonialCard.js',
		'/src/components/marketing/common/cards/MentorCard.js',
		'/src/components/marketing/common/cards/MentorSummaryCard.js',
		'/src/layouts/marketing/navbars/NavbarMentorPages.js',
		'/src/layouts/marketing/footers/FooterDark.js',
		'/src/routes/marketing/MentorFooterRoutes.js'
	]
	const UpdatedReactFiles = [
		'/routes/dashboard/DashboardRoutes.js',
		'/routes/marketing/NavbarDefault.js',
	]
	const UpdatedReactFilesDefaultProps = [
		'/src/components/elements/tags/*.*',
		'/src/components/elements/form-select/FormSelect.js',
		'/src/components/elements/tooltips/GKTippy.js',
		'/src/components/elements/flat-pickr/FlatPickr.js',
		'/src/components/elements/charts/ApexCharts.js',
		'/src/components/elements/bootstrap/Avatar.js',
		'/src/components/marketing/navbars/NavbarDefault.js',
		'/src/components/marketing/navbars/mega-menu/NavbarMegaMenu.js',
		'/src/components/marketing/navbars/NavbarLanding.js',
		'/src/components/marketing/pages/courses/CourseSlider.js',
		'/src/components/marketing/pages/courses/CourseCard.js',
		'/src/components/marketing/common/clientlogos/*.*',
		'/src/components/marketing/common/testimonials/TestimonialsSlider.js',
		'/src/components/marketing/common/testimonials/TestimonialsSlider2.js',
		'/src/components/marketing/common/testimonials/TestimonialsSlider3.js',
		'/src/components/marketing/common/section-headings/SectionHeadingDarkCenter.js',
		'/src/components/marketing/common/section-headings/SectionHeadingLeft3.js',
		'/src/components/marketing/common/features/FeatureTopIconWithLink.js',
		'/src/components/dashboard/common/stats/StatRightBadge.js',
		'/src/elements/range-slider/RangeSlider.js',
		'/src/layouts/marketing/footers/FooterDark.js',
		'/src/layouts/marketing/navbars/help-center/NavbarHelpCenter.js'
	]
	const UpdatedSass = [
		'/src/assets/scss/theme/components/_card.scss',
		'/src/assets/scss/theme/components/_button.scss',
		'/src/assets/scss/theme/components/_footer.scss',
		'/src/assets/scss/theme/components/_nav.scss',
		'/src/assets/scss/theme/components/_navbar.scss',
		'/src/assets/scss/theme/root/_darkmode.scss',
		'/src/assets/scss/theme/_theme.scss',
		'/src/assets/scss/theme/_utilities.scss',
		'/src/assets/scss/theme/_variables.scss'
	]

	const NewDataFiles = [
		'/src/data/marketing/clientlogos/BrandLogoList.js',
		'/src/data/marketing/mentor/*.*'
	]
	return (
		<Row>
			<Col lg={7} md={12} sm={12}>
				<Card>
					<Card.Body>
						<Row className="g-0">
							<Col lg={3} md={4} sm={12}>
								<div id="initial">
									<h5 className="mb-3 fwsemi--bold">
										<code>v2.3.0</code> - July 25, 2024
									</h5>
								</div>
							</Col>
							<Col lg={9} md={8} sm={12}>
								<div>
									<h4 className="mb-1 fw-semi-bold">Geeks NextJS Update</h4>
									<ul>
										<li>Added <code>react-select</code> package</li>
										<li>Added <code>react-hook-form</code> package</li>
										<li>Added <code>@hookform/resolvers/yup</code> package</li>
										<li>Added <code>react-range-slider-input</code> package</li>
										<li>Required packages are updated.</li>
										<li>Fixed a few bugs</li>
									</ul>
								</div>

								<div className="mb-3">
									<h4>New Components / Layout / Hook / React Files:</h4>
									<ul>
										{NewReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>New SCSS Files:</h4>
									<ul>
										{NewSass.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>
								<div className="mb-3">
									<h4>New Media Files:</h4>
									<ul>
										{NewMediaFiles.map((item, index) => {
											return (
												<li key={index}>
													<code>{item}</code>
												</li>
											);
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>New Data Files:</h4>
									<ul>
										{NewDataFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated Components / Layout / Hook / React Files:</h4>
									<ul>
										{UpdatedReactFiles.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
										<li style={{ listStyle: 'none' }}>
											Removed defaultProps from below components, because support for defaultProps will be removed from function components in a future major release.
										</li>
										{UpdatedReactFilesDefaultProps.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>

								<div className="mb-3">
									<h4>Updated SCSS Files:</h4>
									<ul>
										{UpdatedSass.map((item, index) => {
											return (<li key={index}><code>{item}</code></li>)
										})}
									</ul>
								</div>


							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default Version020300;
