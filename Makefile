build:
	docker build -t ldj-cleaner .

run-test:
	echo "Valid:"
	cat fixture.dat | docker run -i ldj-cleaner 2>/dev/null
	echo
	echo "Invalid:"
	cat fixture.dat | docker run -i ldj-cleaner 1>/dev/null
