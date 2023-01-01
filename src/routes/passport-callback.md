---
title: Passport req.logout Callback Function
---
You must now add a callback function into req.logout and put your code inside it.

So your code should change from this:
```js
router.get('/logout', (req, res) => {
	req.logout();
	req.flash('success', 'Goodbye!');
	res.redirect('/campgrounds');
});
```

to this:
```js
router.get('/logout', (req, res) => {
	req.logout(function(err){
		if (err) { return next(err); }
		req.flash('success', 'Goodbye!');
		res.redirect('/campgrounds');
	});
});
```