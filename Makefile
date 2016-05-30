all:
	rm -f ./kraken-eth-price.zip
	zip --exclude=*README.md* --exclude=*Makefile* -r ./kraken-eth-price.zip ./*
