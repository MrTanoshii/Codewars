import solution


def main():
    start = "10.0.0.0"
    end = "10.0.0.50"
    result = solution.ips_between(start, end)
    print(start, "-", end)
    if result == 50:
        print("PASSED")
    else:
        print("FAILED")

    print("-----------------------------")

    start = "20.0.0.10"
    end = "20.0.1.0"
    result = solution.ips_between(start, end)
    print(start, "-", end)
    if result == 246:
        print("PASSED")
    else:
        print("FAILED")


if __name__ == "__main__":
    main()
