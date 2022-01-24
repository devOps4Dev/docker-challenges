FROM golang:1.17-alpine

WORKDIR /go/src/app

COPY . .

RUN go mod init

RUN go build -o ./hello.go

CMD ["./hello.go"]
