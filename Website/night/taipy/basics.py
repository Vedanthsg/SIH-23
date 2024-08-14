from taipy import Gui

title = "Emergency Dashboard"
page = """
<|text-center|
<|{title}|>
>
"""
if __name__ == "__main__":
    app = Gui(page)
    app.run(use_reloader=True)