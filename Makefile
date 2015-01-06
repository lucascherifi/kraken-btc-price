all:
	rm -f ./kraken-btc-price.zip
	zip --exclude=*README.md* --exclude=*Makefile* -r ./kraken-btc-price.zip ./*
