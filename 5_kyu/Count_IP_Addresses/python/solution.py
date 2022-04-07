def ips_between(start, end):
    """ Returns the difference between 2 ip addresses """

    # Create an ip list from the ip string
    start = start.split(".")
    end = end.split(".")

    # Find the equivalent integer value
    start_value = ip_to_int(start)
    end_value = ip_to_int(end)

    # Calculate difference and return
    diff = end_value - start_value
    return diff


def ip_to_int(ip):
    """ Converts the ip list into an integer """
    result = 0

    for i in range(len(ip) - 1, -1, -1):
        result += int(ip[i]) * (256 ** (len(ip) - (i + 1)))

    return result
