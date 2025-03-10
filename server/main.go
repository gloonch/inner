package main

import (
	"fmt"
	"log"
	"time"

	"github.com/mshafiee/jpleph"
)

func main() {
	ephemerisFile := "path/to/de430t.bsp"

	eph, err := jpleph.NewEphemeris(ephemerisFile)
	if err != nil {
		log.Fatalf("خطا در بارگیری داده‌های JPL: %v", err)
	}

	t := time.Date(2025, 2, 10, 0, 0, 0, 0, time.UTC)

	earthPos, err := eph.Position(jpleph.Earth, t)
	if err != nil {
		log.Fatalf("خطا در دریافت موقعیت زمین: %v", err)
	}

	moonPos, err := eph.Position(jpleph.Moon, t)
	if err != nil {
		log.Fatalf("خطا در دریافت موقعیت ماه: %v", err)
	}

	fmt.Printf("📌 موقعیت زمین در %v: X=%f, Y=%f, Z=%f\n", t, earthPos.X, earthPos.Y, earthPos.Z)
	fmt.Printf("🌙 موقعیت ماه در %v: X=%f, Y=%f, Z=%f\n", t, moonPos.X, moonPos.Y, moonPos.Z)
}
