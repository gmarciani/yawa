"""
Utilities for CLI.
"""

import sys

from colored import attr, fg
from pyfiglet import Figlet
from yawa_ops.utils.logutils import get_logger

logger = get_logger(__name__)


def get_splash(name):
    """
    Returns the Splash Screen as ASCII Art.
    :return: The Splash Screen.
    """
    f = Figlet(font="slant")
    return "%s %s %s" % (fg("yellow"), f.renderText(name), attr(0))


def print_progress(iteration, total, prefix="PROGRESS", suffix="Complete", message="", decimals=0, bar_length=50):
    format_string = "{0:." + str(decimals) + "f}"
    percents = format_string.format(100 * (iteration / float(total)))
    filled_length = int(round(bar_length * iteration / float(total)))
    bar = "=" * filled_length + " " * (bar_length - filled_length)

    sys.stdout.flush()

    sys.stdout.write(
        "\r%s [%s] %s%% %s (%d/%d) { %s }" % (prefix, bar, percents, suffix, iteration, total, message or "no message")
    )


if __name__ == "__main__":
    print(get_splash("MY APP"))

    from time import sleep

    tot = 1000

    logger.info("Start")

    for i in range(tot + 1):
        sleep(1 / tot)
        print_progress(i, tot)

    logger.info("End")
