import  React from 'react';
// import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images';

class Gallery extends React.Component {
	constructor () {
		super();
/*ALL THESE ARE LIGHTBOX RELATED*/
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}
	/*ALL THESE ARE LIGHTBOX RELATED*/





	renderGallery () {
		const { images } = this.props;

		if (!images) return;

		const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
			return (
				<div className="item" key={i}>
				<a
					href={obj.src}
					className={css(classes.thumbnail, classes[obj.orientation])}
					key={i}
					onClick={(e) => this.openLightbox(i, e)}
				>
					<img src={obj.thumbnail} className={css(classes.source)} />
				</a>
				</div>
			);
		});

		return (
			<div className={css(classes.gallery)}>
				{gallery}
			</div>
		);
	}
	render () {
		return (
			<div className="galleria">
				{this.props.heading && <h2>{this.props.heading}</h2>}
				{this.props.subheading && <p>{this.props.subheading}</p>}
				{this.renderGallery()}
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.props.images}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					showThumbnails={this.props.showThumbnails}
					theme={this.props.theme}
					width= '80vw'
				/>
			</div>
		);
	}
};

/*
Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: PropTypes.string,
	images: PropTypes.array,
	showThumbnails: PropTypes.bool,
	subheading: PropTypes.string,
};
*/

const gutter = {
	small: 2,
	large: 4,
};
const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large,
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '25vw',


		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},

		'@media only screen and (orientation: portrait)': {
			width:'50vw',
		},
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: '33.3vh',
		width: '100vw',

		'@media only screen and (orientation: portrait)': {
			height: '16.666vh'
		},

		'@media only screen and (orientation: portrait) and (min-device-height: 300px) and (max-device-height: 740px)': {
			height: '14.8vh'
		},
	},
});

module.exports = Gallery;
