FROM golang:1.17-alpine as builder

WORKDIR /go/src/app

COPY . .

RUN go mod init

RUN go build -o ./hello.go


FROM scratch

WORKDIR /app

COPY --from=builder /go/src/app .

CMD ["./hello.go"]