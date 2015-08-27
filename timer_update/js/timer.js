$('#cdown_tmr').countdown({ 
	timeSeparator: ':', // Separator for time periods 
    isRTL: false, // True for right-to-left languages, false for left-to-right 
	until: '+5m', // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to 
	format: 'MS', // Format for display - upper case for always, lower case only if non-zero, 
	//layout: '', // Build your own layout for the countdown 
	compact: true, // True to display in a compact format, false for an expanded one 
	padZeroes: false, // True to add leading zeroes 
	significant: 0, // The number of periods with values to show, zero for all 
	description: '', // The description displayed for the countdown 
	//expiryUrl: null, // A URL to load upon expiry, replacing the current page 
	alwaysExpire: false, // True to trigger onExpiry even if never counted down 
	//onExpiry: null, // Callback when the countdown expires - 
		// receives no parameters and 'this' is the containing division 
	//onTick: null, // Callback when the countdown is updated - 
		// receives int[7] being the breakdown by period (based on format) 
		// and 'this' is the containing division 
	tickInterval: 1 // Interval (seconds) between onTick callbacks 
}); 