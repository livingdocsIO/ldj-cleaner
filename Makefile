version = 1.0.0
name = livingdocs/ldj-cleaner

build:
	docker build -t $(name):$(version) .

run-test:
	echo "Valid:"
	cat fixture.dat | docker run -i $(name) 2>/dev/null
	echo
	echo "Invalid:"
	docker run -i $(name) <fixture.dat 1>/dev/null

publish: build
	docker push $(name):$(version)

login:
	docker login -u livingdocsdev
