import React, { useState } from 'react';
import './gridComponent.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { addItemToWatchlist } from '../../../functions/addItemToWatchlist';
import { removeItemFromWatchlist } from '../../../functions/removeItemFromWatchlist';

function GridComponent({ coin }) {
	const watchList = JSON.parse(localStorage.getItem('watchlist'));
	const [isCoinAdded, setIsCoinAdded] = useState(
		watchList?.includes(coin.id)
	);

	return (
		<Link to={`/coin/${coin.id}`}>
			<div
				className={`coinDetail_div  ${
					coin.price_change_percentage_24h < 0 && 'coinDetail_red'
				}`}
			>
				<div className='info-flex'>
					<img className='coin-img' src={coin.image} alt='' />
					<div>
						<p className='symbol'>{coin.symbol}</p>
						<p className='name'>{coin.name}</p>
					</div>

					<div
						className={`watch_div ${
							coin.price_change_percentage_24h < 0 && 'watch_red'
						}`}
						onClick={(e) => {
							e.preventDefault();
							if (isCoinAdded) {
								removeItemFromWatchlist(
									e,
									coin.id,
									setIsCoinAdded
								);
							} else {
								setIsCoinAdded(true);
								addItemToWatchlist(e, coin.id);
							}
						}}
					>
						<StarOutlineOutlinedIcon />
					</div>
				</div>

				{coin.price_change_percentage_24h > 0 ? (
					<div className='price-flex'>
						<div className='marketcap_change'>
							<p>
								{coin.price_change_percentage_24h.toFixed(2)}%
							</p>
						</div>
						<div className='icon'>
							<TrendingUpRoundedIcon />
						</div>
					</div>
				) : (
					<div className='price-flex'>
						<div className='marketcap_change red'>
							<p>
								{coin.price_change_percentage_24h.toFixed(2)}%
							</p>
						</div>
						<div className='icon red_icon'>
							<TrendingDownRoundedIcon />
						</div>
					</div>
				)}

				<div className='market-flex'>
					{coin.price_change_percentage_24h > 0 ? (
						<div className='curr_price'>
							${coin.current_price.toLocaleString()}
						</div>
					) : (
						<div className='curr_price red_curr'>
							${coin.current_price.toLocaleString()}
						</div>
					)}
					<div>
						Total Volume : {coin.total_volume.toLocaleString()}
					</div>
					<div className='market_cap'>
						Market Cap : ${coin.market_cap.toLocaleString()}
					</div>
				</div>
			</div>
		</Link>
	);
}

export default GridComponent;
